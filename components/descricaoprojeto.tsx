import Projeto from './projeto';


export default function DescricaoProjetos() {
return (
<section className="space-y-6">
<p>
Ao longo desta disciplina desenvolvi vários projetos práticos que
me permitiram consolidar conhecimentos em frontend e frameworks modernos.
</p>


<a
href="https://kuroi626.github.io"
target="_blank"
rel="noopener noreferrer"
className="text-blue-600 underline"
>
Ver todos os projetos no GitHub Pages
</a>


<div className="space-y-3">
<Projeto
nome="Loja Online"
url="https://kuroi626.github.io/Lab7"
/>
<Projeto
nome="Site com JavaScript Interativo"
url="https://kuroi626.github.io/Lab3"
/>
</div>
</section>
);
}