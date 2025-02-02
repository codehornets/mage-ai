import { BlockTypeEnum } from './BlockType';

export enum DataSourceTypeEnum {
  AMAZON_SQS = 'amazon_sqs',
  API = 'api',
  AZURE_BLOB_STORAGE = 'azure_blob_storage',
  AZURE_DATA_LAKE = 'azure_data_lake',
  AZURE_EVENT_HUB = 'azure_event_hub',
  BIGQUERY = 'bigquery',
  CLICKHOUSE = 'clickhouse',
  DRUID = 'druid',
  DUCKDB = 'duckdb',
  DUMMY = 'dummy',
  ELASTICSEARCH = 'elasticsearch',
  FILE = 'file',
  GENERIC = 'generic',
  GOOGLE_CLOUD_PUBSUB = 'google_cloud_pubsub',
  GOOGLE_CLOUD_STORAGE = 'google_cloud_storage',
  INFLUXDB = 'influxdb',
  KAFKA = 'kafka',
  KINESIS = 'kinesis',
  MONGODB = 'mongodb',
  MSSQL = 'mssql',
  MYSQL = 'mysql',
  OPENSEARCH = 'opensearch',
  ORACLEDB = 'oracledb',
  POSTGRES = 'postgres',
  RABBITMQ = 'rabbitmq',
  REDSHIFT = 'redshift',
  S3 = 's3',
  SNOWFLAKE = 'snowflake',
  TRINO = 'trino',
}

export const DATA_SOURCE_TYPE_HUMAN_READABLE_NAME_MAPPING = {
  [DataSourceTypeEnum.AMAZON_SQS]: 'Amazon SQS',
  [DataSourceTypeEnum.API]: 'API',
  [DataSourceTypeEnum.AZURE_BLOB_STORAGE]: 'Azure Blob Storage',
  [DataSourceTypeEnum.AZURE_DATA_LAKE]: 'Azure Data Lake',
  [DataSourceTypeEnum.AZURE_EVENT_HUB]: 'Azure Event Hub',
  [DataSourceTypeEnum.BIGQUERY]: 'Google BigQuery',
  [DataSourceTypeEnum.CLICKHOUSE]: 'ClickHouse',
  [DataSourceTypeEnum.DRUID]: 'Druid',
  [DataSourceTypeEnum.DUCKDB]: 'DuckDB',
  [DataSourceTypeEnum.DUMMY]: 'Dummy',
  [DataSourceTypeEnum.ELASTICSEARCH]: 'ElasticSearch',
  [DataSourceTypeEnum.FILE]: 'Local file',
  [DataSourceTypeEnum.GENERIC]: 'Generic (no template)',
  [DataSourceTypeEnum.GOOGLE_CLOUD_PUBSUB]: 'Google Cloud PubSub',
  [DataSourceTypeEnum.GOOGLE_CLOUD_STORAGE]: 'Google Cloud Storage',
  [DataSourceTypeEnum.INFLUXDB]: 'InfluxDB',
  [DataSourceTypeEnum.KAFKA]: 'Kafka',
  [DataSourceTypeEnum.KINESIS]: 'Kinesis',
  [DataSourceTypeEnum.MONGODB]: 'MongoDB',
  [DataSourceTypeEnum.MSSQL]: 'Microsoft SQL Server',
  [DataSourceTypeEnum.MYSQL]: 'MySQL',
  [DataSourceTypeEnum.OPENSEARCH]: 'OpenSearch',
  [DataSourceTypeEnum.ORACLEDB]: 'OracleDB',
  [DataSourceTypeEnum.POSTGRES]: 'PostgreSQL',
  [DataSourceTypeEnum.RABBITMQ]: 'RabbitMQ',
  [DataSourceTypeEnum.REDSHIFT]: 'Amazon Redshift',
  [DataSourceTypeEnum.S3]: 'Amazon S3',
  [DataSourceTypeEnum.SNOWFLAKE]: 'Snowflake',
  [DataSourceTypeEnum.TRINO]: 'Trino',
};

export const DATA_SOURCE_TYPES: { [blockType in BlockTypeEnum]?: DataSourceTypeEnum[] } = {
  [BlockTypeEnum.DATA_LOADER]: [
    DataSourceTypeEnum.GENERIC,
    DataSourceTypeEnum.FILE,
    DataSourceTypeEnum.API,
    DataSourceTypeEnum.AZURE_BLOB_STORAGE,
    DataSourceTypeEnum.BIGQUERY,
    DataSourceTypeEnum.DRUID,
    DataSourceTypeEnum.GOOGLE_CLOUD_STORAGE,
    DataSourceTypeEnum.MYSQL,
    DataSourceTypeEnum.ORACLEDB,
    DataSourceTypeEnum.POSTGRES,
    DataSourceTypeEnum.REDSHIFT,
    DataSourceTypeEnum.S3,
    DataSourceTypeEnum.SNOWFLAKE,
  ],
  [BlockTypeEnum.DATA_EXPORTER]: [
    DataSourceTypeEnum.GENERIC,
    DataSourceTypeEnum.FILE,
    DataSourceTypeEnum.S3,
    DataSourceTypeEnum.AZURE_BLOB_STORAGE,
    DataSourceTypeEnum.GOOGLE_CLOUD_STORAGE,
    DataSourceTypeEnum.REDSHIFT,
    DataSourceTypeEnum.BIGQUERY,
    DataSourceTypeEnum.SNOWFLAKE,
    DataSourceTypeEnum.MYSQL,
    DataSourceTypeEnum.POSTGRES,
  ],
  [BlockTypeEnum.TRANSFORMER]: [
    DataSourceTypeEnum.REDSHIFT,
    DataSourceTypeEnum.BIGQUERY,
    DataSourceTypeEnum.SNOWFLAKE,
    DataSourceTypeEnum.POSTGRES,
  ],
  [BlockTypeEnum.SENSOR]: [
    DataSourceTypeEnum.GENERIC,
    DataSourceTypeEnum.S3,
    DataSourceTypeEnum.GOOGLE_CLOUD_STORAGE,
    DataSourceTypeEnum.REDSHIFT,
    DataSourceTypeEnum.BIGQUERY,
    DataSourceTypeEnum.SNOWFLAKE,
    DataSourceTypeEnum.MYSQL,
    DataSourceTypeEnum.POSTGRES,
  ],
};

export default DataSourceTypeEnum;
