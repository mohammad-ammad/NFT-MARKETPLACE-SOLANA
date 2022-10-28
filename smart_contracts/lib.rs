use anchor_lang::prelude::*;

pub mod constant;
pub mod states;

//importing constant and states files
use crate::{constant::*, states::*};

//declare id is the program address
declare_id!("DmXbbH1oJRT4bwzCXKNNBmKYNmR8hMd6GgtYk2FKqJbu");

//code container
#[program]
pub mod marketplace{
    use super::*;

    //whitelist the user
    pub fn whitelist(ctx: Context<InitUser>, name:String) -> Result<()>{
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;
        
        user_account.name = name;
        user_account.nft_count = 0;
        user_account.authority = authority.key();
        Ok(())
    }

    //mint function
    pub fn mint(ctx: Context<Mint>, url:String, amount:u8) -> Result<()> {
        let _mint = &mut ctx.accounts.product_mint;
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        _mint.url = url;
        _mint.amount = amount;
        _mint.authority = authority.key();

         _mint.tokenId = _mint.tokenId
        .checked_add(1)
        .unwrap();
        user_account.nft_count = user_account.nft_count
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
        space= 289 + 4
    )]
    pub user_account: Account<'info, User>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct Mint<'info>{
    #[account(
        init,
        seeds=[PRODUCT_SEED,authority.key().as_ref(),&[user_account.nft_count as u8].as_ref()],
        bump,
        payer=authority,
        space= 290 + 4
    )]

    pub product_mint: Account<'info, Product_Mint>,

    #[account(
        mut,
        seeds=[USER_SEED,authority.key().as_ref()],
        bump,
        has_one = authority
    )]

    pub user_account: Account<'info, User>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}