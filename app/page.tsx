import { NextPage } from 'next';
import './globals.css';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-6xl font-black mb-6">
          PixNinja<span className="text-emerald-500">⚡️</span>
        </h1>
        <p className="text-2xl mb-8 text-gray-300">
          Receba qualquer valor como se fosse Pix<br/>
          Mas cai direto na sua wallet. Sem banco. Sem CPF na nota.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="/dashboard" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-5 px-10 rounded-xl text-xl">
            Começar grátis agora
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">Zero taxa até R$ 2.000/mês</h3>
            <p className="text-gray-400">Depois só 1,9% – mais barato que maquininha</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-emerald-500">
            <h3 className="text-2xl font-bold mb-3">Ninguém vê seu CPF</h3>
            <p className="text-gray-400">Nem exchange, nem banco, nem Receita</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">Cai em 4 segundos</h3>
            <p className="text-gray-400">Polygon + Lightning = mais rápido que Pix</p>
          </div>
        </div>
        <p className="mt-20 text-gray-500 text-sm">
          Já usado por +1.200 freelancers que odeiam carnê-leão
        </p>
      </div>
    </div>
  );
};

export default Home;
