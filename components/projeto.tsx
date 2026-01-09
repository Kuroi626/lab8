type ProjetoProps = {
nome: string;
url: string;
};


export default function Projeto({ nome, url }: ProjetoProps) {
return (
<p>
Projeto <strong>{nome}</strong> disponível em{' '}
<a
href={url}
target="_blank"
rel="noopener noreferrer"
className="text-blue-600 underline"
>
{url}
</a>
</p>
);
}