type LineColabProps = {
  name: string;
  admissionDate: string;
};
export function LineColab({ name, admissionDate }: LineColabProps) {
  return (
    <div>
      <a href="/a" className="orderView">
        <div>
          <h5>{name}</h5>
          <small>Data de admissão: {admissionDate}</small>
        </div>
      </a>
    </div>
  );
}
