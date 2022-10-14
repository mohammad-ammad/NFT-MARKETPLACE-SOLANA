use anchor_lang::prelude::*;

#[account]
#[derive(Default)]

pub struct User{
    pub name: String, //4 + 256
    pub authority: Pubkey, //32
    pub nft_count: u8 //1
}