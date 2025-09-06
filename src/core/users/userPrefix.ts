/**
 * The prefixes for all user IDs to 
 * be able to tell each ID apart
 * the acc - exposes that the id is an account
 * the adm - exposes that it an account of type admin
 * the agt - exposes that it is an account of type agent
 * the cus - exposes that it is an accout of type customer
 */
export enum UserIDPrefixes {
    ADMIN = "acc_adm",
    AGENT = "acc_agt",
    CUSTOMER = "acc_cus"
}