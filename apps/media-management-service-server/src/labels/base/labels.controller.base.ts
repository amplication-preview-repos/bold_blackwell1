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
import { LabelsService } from "../labels.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LabelsCreateInput } from "./LabelsCreateInput";
import { Labels } from "./Labels";
import { LabelsFindManyArgs } from "./LabelsFindManyArgs";
import { LabelsWhereUniqueInput } from "./LabelsWhereUniqueInput";
import { LabelsUpdateInput } from "./LabelsUpdateInput";
import { SoundsLabelsFindManyArgs } from "../../soundsLabels/base/SoundsLabelsFindManyArgs";
import { SoundsLabels } from "../../soundsLabels/base/SoundsLabels";
import { SoundsLabelsWhereUniqueInput } from "../../soundsLabels/base/SoundsLabelsWhereUniqueInput";
import { TextsLabelsFindManyArgs } from "../../textsLabels/base/TextsLabelsFindManyArgs";
import { TextsLabels } from "../../textsLabels/base/TextsLabels";
import { TextsLabelsWhereUniqueInput } from "../../textsLabels/base/TextsLabelsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LabelsControllerBase {
  constructor(
    protected readonly service: LabelsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Labels })
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLabels(@common.Body() data: LabelsCreateInput): Promise<Labels> {
    return await this.service.createLabels({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Labels] })
  @ApiNestedQuery(LabelsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async labelsItems(@common.Req() request: Request): Promise<Labels[]> {
    const args = plainToClass(LabelsFindManyArgs, request.query);
    return this.service.labelsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Labels })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async labels(
    @common.Param() params: LabelsWhereUniqueInput
  ): Promise<Labels | null> {
    const result = await this.service.labels({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Labels })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLabels(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() data: LabelsUpdateInput
  ): Promise<Labels | null> {
    try {
      return await this.service.updateLabels({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Labels })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLabels(
    @common.Param() params: LabelsWhereUniqueInput
  ): Promise<Labels | null> {
    try {
      return await this.service.deleteLabels({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
  @common.Get("/:id/soundsLabelsItems")
  @ApiNestedQuery(SoundsLabelsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SoundsLabels",
    action: "read",
    possession: "any",
  })
  async findSoundsLabelsItems(
    @common.Req() request: Request,
    @common.Param() params: LabelsWhereUniqueInput
  ): Promise<SoundsLabels[]> {
    const query = plainToClass(SoundsLabelsFindManyArgs, request.query);
    const results = await this.service.findSoundsLabelsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        label: {
          select: {
            id: true,
          },
        },

        sound: {
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

  @common.Post("/:id/soundsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async connectSoundsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: SoundsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soundsLabelsItems: {
        connect: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/soundsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async updateSoundsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: SoundsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soundsLabelsItems: {
        set: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/soundsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async disconnectSoundsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: SoundsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soundsLabelsItems: {
        disconnect: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/textsLabelsItems")
  @ApiNestedQuery(TextsLabelsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TextsLabels",
    action: "read",
    possession: "any",
  })
  async findTextsLabelsItems(
    @common.Req() request: Request,
    @common.Param() params: LabelsWhereUniqueInput
  ): Promise<TextsLabels[]> {
    const query = plainToClass(TextsLabelsFindManyArgs, request.query);
    const results = await this.service.findTextsLabelsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        label: {
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

  @common.Post("/:id/textsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async connectTextsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: TextsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textsLabelsItems: {
        connect: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/textsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async updateTextsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: TextsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textsLabelsItems: {
        set: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/textsLabelsItems")
  @nestAccessControl.UseRoles({
    resource: "Labels",
    action: "update",
    possession: "any",
  })
  async disconnectTextsLabelsItems(
    @common.Param() params: LabelsWhereUniqueInput,
    @common.Body() body: TextsLabelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textsLabelsItems: {
        disconnect: body,
      },
    };
    await this.service.updateLabels({
      where: params,
      data,
      select: { id: true },
    });
  }
}