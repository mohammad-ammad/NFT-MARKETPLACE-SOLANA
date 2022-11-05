

use anchor_lang::prelude::*;

pub mod constant;
pub mod states;

//importing constant and states files
use crate::{constant::*, states::*};

//declare id is the program address
declare_id!("8Bmk1kaHdoDh1JLv8XbRLRVcCqrcGatatArEpG1gMQ9S");

//code container
#[program]
pub mod ecommerce {
    //this will get the all functionality describe over the scope
    use super::*;

    //initialzed the user function
    pub fn init_user(ctx: Context<InitUser>, name: String, avatar: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.avatar = avatar;
        user_account.last_product_id = 0;
        user_account.product_count = 0;
        user_account.authority = authority.key();

        Ok(())
    }

    //create product
    pub fn mint(ctx:Context<CreateProduct>,title:String,content:String,uri:String,price:u8) -> Result<()>{
        let product_account = &mut ctx.accounts.product_account;
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        product_account.id = user_account.last_product_id;
        product_account.title = title;
        product_account.content = content;
        product_account.uri = uri;
        product_account.price = price;
        product_account.user = user_account.key();
        product_account.authority = authority.key();

        //increment product id
        user_account.last_product_id = user_account.last_product_id
        .checked_add(1)
        .unwrap();
        user_account.product_count = user_account.product_count
        .checked_add(1)
        .unwrap();

        Ok(())
    }

    //buy product
    pub fn buy_product(ctx:Context<CreateProduct>,title:String,content:String,uri:String,price:u8) -> Result<()>{
        let product_account = &mut ctx.accounts.product_account;
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        product_account.id = user_account.last_product_id;
        product_account.title = title;
        product_account.content = content;
        product_account.uri = uri;
        product_account.price = price;
        product_account.user = user_account.key();
        product_account.authority = authority.key();

        //increment product id
        user_account.last_product_id = user_account.last_product_id
        .checked_add(1)
        .unwrap();
        user_account.product_count = user_account.product_count
        .checked_add(1)
        .unwrap();

        Ok(())
    }
}

//define struct
#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info> {
    #[account(
        init,
        seeds=[USER_SEED,authority.key().as_ref()],
        bump,
        payer=authority,
        space= 2312 + 8
    )]
    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct CreateProduct<'info>{
    #[account(
        init,
        seeds=[PRODUCT_SEED,authority.key().as_ref(),&[user_account.last_product_id as u8].as_ref()],
        bump,
        payer=authority,
        space= 2376 + 8
    )]

    pub product_account:Account<'info,ProductAccount>,

    #[account(
        mut,
        seeds=[USER_SEED,authority.key().as_ref()],
        bump,
        has_one = authority
    )]

    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}