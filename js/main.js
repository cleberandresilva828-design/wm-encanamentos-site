document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('orcamento-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const email = document.getElementById('email').value.trim();
      const tipo = document.getElementById('tipo-servico').value;
      const mensagem = document.getElementById('mensagem').value.trim();

      const linhas = [
        '*Novo pedido de orçamento - Site WM Encanamentos*',
        '',
        `*Nome:* ${nome}`,
        `*Telefone:* ${telefone}`,
        email ? `*E-mail:* ${email}` : null,
        `*Tipo de serviço:* ${tipo || 'não informado'}`,
        '',
        '*Descrição do problema:*',
        mensagem || 'não informado'
      ].filter(Boolean);

      const texto = encodeURIComponent(linhas.join('\n'));
      const numeroWhatsApp = '554598260973'; // Substitua pelo seu número com DDI + DDD, somente números
      const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

      window.open(url, '_blank');
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
