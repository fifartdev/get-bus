import { Client, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66320add0031254e66bb");

const account = new Account(client);

export { account, ID, Query };
