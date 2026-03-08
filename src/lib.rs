use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWxTWqkZyK5hY7nUo7zG5R6fK5F");

#[program]
pub mod biblioteca_solana {
    use super::*;

    // CREATE
    pub fn crear_libro(
        ctx: Context<CrearLibro>,
        titulo: String,
        autor: String,
        precio: u64,
        stock: u64,
    ) -> Result<()> {

        let libro = &mut ctx.accounts.libro;

        libro.titulo = titulo;
        libro.autor = autor;
        libro.precio = precio;
        libro.stock = stock;

        Ok(())
    }

    // UPDATE
    pub fn actualizar_libro(
        ctx: Context<ActualizarLibro>,
        precio: u64,
        stock: u64,
    ) -> Result<()> {

        let libro = &mut ctx.accounts.libro;

        libro.precio = precio;
        libro.stock = stock;

        Ok(())
    }

    // DELETE
    pub fn eliminar_libro(_ctx: Context<EliminarLibro>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CrearLibro<'info> {
    #[account(init, payer = user, space = 8 + 200)]
    pub libro: Account<'info, Libro>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ActualizarLibro<'info> {
    #[account(mut)]
    pub libro: Account<'info, Libro>,
}

#[derive(Accounts)]
pub struct EliminarLibro<'info> {
    #[account(mut, close = user)]
    pub libro: Account<'info, Libro>,

    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct Libro {
    pub titulo: String,
    pub autor: String,
    pub precio: u64,
    pub stock: u64,
}
