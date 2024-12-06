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
import { AccountsService } from "../accounts.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountsCreateInput } from "./AccountsCreateInput";
import { Accounts } from "./Accounts";
import { AccountsFindManyArgs } from "./AccountsFindManyArgs";
import { AccountsWhereUniqueInput } from "./AccountsWhereUniqueInput";
import { AccountsUpdateInput } from "./AccountsUpdateInput";
import { AccountsBooksFindManyArgs } from "../../accountsBooks/base/AccountsBooksFindManyArgs";
import { AccountsBooks } from "../../accountsBooks/base/AccountsBooks";
import { AccountsBooksWhereUniqueInput } from "../../accountsBooks/base/AccountsBooksWhereUniqueInput";
import { OrdersFindManyArgs } from "../../orders/base/OrdersFindManyArgs";
import { Orders } from "../../orders/base/Orders";
import { OrdersWhereUniqueInput } from "../../orders/base/OrdersWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountsControllerBase {
  constructor(
    protected readonly service: AccountsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Accounts })
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAccounts(
    @common.Body() data: AccountsCreateInput
  ): Promise<Accounts> {
    return await this.service.createAccounts({
      data: {
        ...data,

        phone: data.phone
          ? {
              connect: data.phone,
            }
          : undefined,
      },
      select: {
        accountsName: true,
        createdAt: true,
        followers: true,
        id: true,

        phone: {
          select: {
            id: true,
          },
        },

        profilePicture: true,
        totalLikes: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Accounts] })
  @ApiNestedQuery(AccountsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accountsItems(@common.Req() request: Request): Promise<Accounts[]> {
    const args = plainToClass(AccountsFindManyArgs, request.query);
    return this.service.accountsItems({
      ...args,
      select: {
        accountsName: true,
        createdAt: true,
        followers: true,
        id: true,

        phone: {
          select: {
            id: true,
          },
        },

        profilePicture: true,
        totalLikes: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Accounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accounts(
    @common.Param() params: AccountsWhereUniqueInput
  ): Promise<Accounts | null> {
    const result = await this.service.accounts({
      where: params,
      select: {
        accountsName: true,
        createdAt: true,
        followers: true,
        id: true,

        phone: {
          select: {
            id: true,
          },
        },

        profilePicture: true,
        totalLikes: true,
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
  @swagger.ApiOkResponse({ type: Accounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAccounts(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() data: AccountsUpdateInput
  ): Promise<Accounts | null> {
    try {
      return await this.service.updateAccounts({
        where: params,
        data: {
          ...data,

          phone: data.phone
            ? {
                connect: data.phone,
              }
            : undefined,
        },
        select: {
          accountsName: true,
          createdAt: true,
          followers: true,
          id: true,

          phone: {
            select: {
              id: true,
            },
          },

          profilePicture: true,
          totalLikes: true,
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
  @swagger.ApiOkResponse({ type: Accounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAccounts(
    @common.Param() params: AccountsWhereUniqueInput
  ): Promise<Accounts | null> {
    try {
      return await this.service.deleteAccounts({
        where: params,
        select: {
          accountsName: true,
          createdAt: true,
          followers: true,
          id: true,

          phone: {
            select: {
              id: true,
            },
          },

          profilePicture: true,
          totalLikes: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/accountsBooksItems")
  @ApiNestedQuery(AccountsBooksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AccountsBooks",
    action: "read",
    possession: "any",
  })
  async findAccountsBooksItems(
    @common.Req() request: Request,
    @common.Param() params: AccountsWhereUniqueInput
  ): Promise<AccountsBooks[]> {
    const query = plainToClass(AccountsBooksFindManyArgs, request.query);
    const results = await this.service.findAccountsBooksItems(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accountsBooksItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async connectAccountsBooksItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: AccountsBooksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountsBooksItems: {
        connect: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accountsBooksItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async updateAccountsBooksItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: AccountsBooksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountsBooksItems: {
        set: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accountsBooksItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async disconnectAccountsBooksItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: AccountsBooksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountsBooksItems: {
        disconnect: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ordersItems")
  @ApiNestedQuery(OrdersFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Orders",
    action: "read",
    possession: "any",
  })
  async findOrdersItems(
    @common.Req() request: Request,
    @common.Param() params: AccountsWhereUniqueInput
  ): Promise<Orders[]> {
    const query = plainToClass(OrdersFindManyArgs, request.query);
    const results = await this.service.findOrdersItems(params.id, {
      ...query,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        phone: {
          select: {
            id: true,
          },
        },

        text: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ordersItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async connectOrdersItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: OrdersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersItems: {
        connect: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ordersItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async updateOrdersItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: OrdersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersItems: {
        set: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ordersItems")
  @nestAccessControl.UseRoles({
    resource: "Accounts",
    action: "update",
    possession: "any",
  })
  async disconnectOrdersItems(
    @common.Param() params: AccountsWhereUniqueInput,
    @common.Body() body: OrdersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersItems: {
        disconnect: body,
      },
    };
    await this.service.updateAccounts({
      where: params,
      data,
      select: { id: true },
    });
  }
}