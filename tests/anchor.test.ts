import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BibliotecaSolana } from "../target/types/biblioteca_solana";

describe("biblioteca_solana", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.BibliotecaSolana as Program<BibliotecaSolana>;

  const libro = anchor.web3.Keypair.generate();

  it("Crear libro", async () => {

    await program.methods
      .crearLibro(
        "Cien años de soledad",
        "Gabriel Garcia Marquez",
        new anchor.BN(200),
        new anchor.BN(10)
      )
      .accounts({
        libro: libro.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId
      })
      .signers([libro])
      .rpc();

  });

  it("Actualizar libro", async () => {

    await program.methods
      .actualizarLibro(
        new anchor.BN(250),
        new anchor.BN(8)
      )
      .accounts({
        libro: libro.publicKey
      })
      .rpc();

  });

  it("Eliminar libro", async () => {

    await program.methods
      .eliminarLibro()
      .accounts({
        libro: libro.publicKey,
        user: provider.wallet.publicKey
      })
      .rpc();

  });

});
