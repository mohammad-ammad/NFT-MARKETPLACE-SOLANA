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