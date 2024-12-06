import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { BooksModule } from "./books/books.module";
import { TextsModule } from "./texts/texts.module";
import { CaptionsModule } from "./captions/captions.module";
import { OrdersModule } from "./orders/orders.module";
import { ClientsModule } from "./clients/clients.module";
import { SoundsLabelsModule } from "./soundsLabels/soundsLabels.module";
import { AccountsModule } from "./accounts/accounts.module";
import { PhonesModule } from "./phones/phones.module";
import { AccountsBooksModule } from "./accountsBooks/accountsBooks.module";
import { SoundsModule } from "./sounds/sounds.module";
import { ClientsBooksModule } from "./clientsBooks/clientsBooks.module";
import { TextsHashtagsModule } from "./textsHashtags/textsHashtags.module";
import { HashtagsModule } from "./hashtags/hashtags.module";
import { VideoMetricsModule } from "./videoMetrics/videoMetrics.module";
import { LabelsModule } from "./labels/labels.module";
import { TextsLabelsModule } from "./textsLabels/textsLabels.module";
import { CrewModule } from "./crew/crew.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    BooksModule,
    TextsModule,
    CaptionsModule,
    OrdersModule,
    ClientsModule,
    SoundsLabelsModule,
    AccountsModule,
    PhonesModule,
    AccountsBooksModule,
    SoundsModule,
    ClientsBooksModule,
    TextsHashtagsModule,
    HashtagsModule,
    VideoMetricsModule,
    LabelsModule,
    TextsLabelsModule,
    CrewModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
