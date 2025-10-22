import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const investmentResult = calculateInvestmentResults(input);
  const initialInvestment =
    investmentResult[0].valueEndOfYear -
    investmentResult[0].interest -
    investmentResult[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {investmentResult.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(initialInvestment)}</td>
              <td>{formatter.format(item.interest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
