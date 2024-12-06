/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AccountsBooksService } from "../accountsBooks.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountsBooksCreateInput } from "./AccountsBooksCreateInput";
import { AccountsBooks } from "./AccountsBooks";
import { AccountsBooksFindManyArgs } from "./AccountsBooksFindManyArgs";
import { AccountsBooksWhereUniqueInput } from "./AccountsBooksWhereUniqueInput";
import { AccountsBooksUpdateInput } from "./AccountsBooksUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountsBooksControllerBase {
  constructor(
    protected readonly service: AccountsBooksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AccountsBooks })
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAccountsBooks(
    @common.Body() data: AccountsBooksCreateInput
  ): Promise<AccountsBooks> {
    return await this.service.createAccountsBooks({
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        book: data.book
          ? {
              connect: data.book,
            }
          : undefined,
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        book: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AccountsBooks] })
  @ApiNestedQuery(AccountsBooksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accountsBooksItems(
    @common.Req() request: Request
  ): Promise<AccountsBooks[]> {
    const args = plainToClass(AccountsBooksFindManyArgs, request.query);
    return this.service.accountsBooksItems({
      ...args,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        book: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AccountsBooks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accountsBooks(
    @common.Param() params: AccountsBooksWhereUniqueInput
  ): Promise<AccountsBooks | null> {
    const result = await this.service.accountsBooks({
      where: params,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        book: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AccountsBooks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAccountsBooks(
    @common.Param() params: AccountsBooksWhereUniqueInput,
    @common.Body() data: AccountsBooksUpdateInput
  ): Promise<AccountsBooks | null> {
    try {
      return await this.service.updateAccountsBooks({
        where: params,
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          book: data.book
            ? {
                connect: data.book,
              }
            : undefined,
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          book: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AccountsBooks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAccountsBooks(
    @common.Param() params: AccountsBooksWhereUniqueInput
  ): Promise<AccountsBooks | null> {
    try {
      return await this.service.deleteAccountsBooks({
        where: params,
        select: {
          account: {
            select: {
              id: true,
            },
          },

          book: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}