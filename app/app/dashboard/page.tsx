import { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard PixNinja</h1>
      <p>Login funcionando! Aqui vai o QR generator.</p>
      <div className="mt-8 p-4 bg-zinc-900 rounded-xl">
        <h2 className="text-xl mb-4">Teste QR de Pagamento</h2>
        <p className="text-gray-300 mb-4">Valor: R$ 50,00</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Exemplo: Pague R$50 via USDT na Polygon" alt="QR Teste" className="mx-auto" />
        <p className="text-sm text-gray-500 mt-2">Escaneie com wallet pra testar (fake por agora).</p>
      </div>
    </div>
  );
};

export default Dashboard;
