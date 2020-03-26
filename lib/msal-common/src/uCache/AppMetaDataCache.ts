/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { APP_META_DATA, Separators} from "../utils/Constants";

export type AppMetaDataEntity = {

};

/**
 * APP_META_DATA Cache
 */
export class AppMetaDataCache {
    clientId: string;
    environment: string;
    familyId?: string;

    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    generateAppMetaDataKey(): string {
        const appMetaDataKeyArray: Array<string> = [
            APP_META_DATA,
            this.environment,
            this.clientId
        ];

        return appMetaDataKeyArray
            .join(Separators.CACHE_KEY_SEPARATOR)
            .toLowerCase();
    }
}
