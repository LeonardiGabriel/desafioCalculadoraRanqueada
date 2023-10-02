let saldo = soma(80,10)
var nivel

console.log("o saldo de vitórias é " + saldo)

function soma(vitorias,derrotas)
{
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias

}

    if (saldo<=10)
    {
        nivel="Ferro"
    } else if (saldo >10 && saldo<=20)
        {
            nivel="Bronze"
        }   else if (saldo >20 && saldo<=50)
            {
                nivel="Prata"
            }   else if (saldo >50 && saldo<=80)
                {
                nivel="Ouro"
                }   else if (saldo >81 && saldo<=90)
                    {
                        nivel="Diamante"
                    }   else if (saldo >90 && saldo<=100)
                        {
                        nivel="Lendário"
                        }   else
                            {
                                nivel="Imortal"
                            }   


console.log("O jogador está no rank: " + nivel)
