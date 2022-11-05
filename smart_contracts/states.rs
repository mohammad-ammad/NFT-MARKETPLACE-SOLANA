use anchor_lang::prelude::*;

#[account]
#[derive(Default)]

pub struct UserAccount{
    pub name: String,
    pub avatar: String,
    pub authority: Pubkey,
    pub last_product_id: u8,
    pub product_count: u8
}

#[account]
#[derive(Default)]
pub struct ProductAccount{
    pub id: u8,
    pub title: String,
    pub uri: String,
    pub price: u8,
    pub content: String,
    pub user: Pubkey,
    pub authority: Pubkey
}