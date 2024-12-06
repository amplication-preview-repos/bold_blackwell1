/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AccountsBooks } from "./AccountsBooks";
import { AccountsBooksCountArgs } from "./AccountsBooksCountArgs";
import { AccountsBooksFindManyArgs } from "./AccountsBooksFindManyArgs";
import { AccountsBooksFindUniqueArgs } from "./AccountsBooksFindUniqueArgs";
import { CreateAccountsBooksArgs } from "./CreateAccountsBooksArgs";
import { UpdateAccountsBooksArgs } from "./UpdateAccountsBooksArgs";
import { DeleteAccountsBooksArgs } from "./DeleteAccountsBooksArgs";
import { Accounts } from "../../accounts/base/Accounts";
import { Books } from "../../books/base/Books";
import { AccountsBooksService } from "../accountsBooks.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountsBooks)
export class AccountsBooksResolverBase {
  constructor(
    protected readonly service: AccountsBooksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "any",
  })
  async _accountsBooksItemsMeta(
    @graphql.Args() args: AccountsBooksCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccountsBooks])
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "any",
  })
  async accountsBooksItems(
    @graphql.Args() args: AccountsBooksFindManyArgs
  ): Promise<AccountsBooks[]> {
    return this.service.accountsBooksItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccountsBooks, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "own",
  })
  async accountsBooks(
    @graphql.Args() args: AccountsBooksFindUniqueArgs
  ): Promise<AccountsBooks | null> {
    const result = await this.service.accountsBooks(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsBooks)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "create",
    possession: "any",
  })
  async createAccountsBooks(
    @graphql.Args() args: CreateAccountsBooksArgs
  ): Promise<AccountsBooks> {
    return await this.service.createAccountsBooks({
      ...args,
      data: {
        ...args.data,

        account: args.data.account
          ? {
              connect: args.data.account,
            }
          : undefined,

        book: args.data.book
          ? {
              connect: args.data.book,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsBooks)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "update",
    possession: "any",
  })
  async updateAccountsBooks(
    @graphql.Args() args: UpdateAccountsBooksArgs
  ): Promise<AccountsBooks | null> {
    try {
      return await this.service.updateAccountsBooks({
        ...args,
        data: {
          ...args.data,

          account: args.data.account
            ? {
                connect: args.data.account,
              }
            : undefined,

          book: args.data.book
            ? {
                connect: args.data.book,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AccountsBooks)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "delete",
    possession: "any",
  })
  async deleteAccountsBooks(
    @graphql.Args() args: DeleteAccountsBooksArgs
  ): Promise<AccountsBooks | null> {
    try {
      return await this.service.deleteAccountsBooks(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Accounts, {
    nullable: true,
    name: "account",
  })
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "read",
    possession: "any",
  })
  async getAccount(
    @graphql.Parent() parent: AccountsBooks
  ): Promise<Accounts | null> {
    const result = await this.service.getAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Books, {
    nullable: true,
    name: "book",
  })
  @nestAccessControl.UseRoles({
    resource: "Books",
    action: "read",
    possession: "any",
  })
  async getBook(
    @graphql.Parent() parent: AccountsBooks
  ): Promise<Books | null> {
    const result = await this.service.getBook(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}