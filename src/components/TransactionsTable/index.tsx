import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {/* Dados de forma estática por enquanto: */}
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>07/06/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1200,00</td>
            <td>Casa</td>
            <td>17/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}