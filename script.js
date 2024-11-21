// script.js

// Dados do gráfico para Steam
const steamData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [{
        label: 'Usuários Ativos',
        data: [1200, 1400, 1800, 2000, 2200],
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 1
    }]
};

// Dados do gráfico para Instagram
const instagramData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [{
        label: 'Seguidores',
        data: [5000, 5300, 6000, 6500, 7000],
        backgroundColor: 'rgba(225, 48, 108, 0.2)',
        borderColor: 'rgba(225, 48, 108, 1)',
        borderWidth: 1
    }]
};

// Dados do gráfico para Xbox
const xboxData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [{
        label: 'Jogadores Ativos',
        data: [3000, 3200, 3400, 3700, 4000],
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        borderColor: 'rgba(0, 122, 255, 1)',
        borderWidth: 1
    }]
};

// Dados do gráfico para WhatsApp
const whatsappData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [{
        label: 'Mensagens Enviadas',
        data: [20000, 22000, 25000, 27000, 30000],
        backgroundColor: 'rgba(37, 211, 102, 0.2)',
        borderColor: 'rgba(37, 211, 102, 1)',
        borderWidth: 1
    }]
};

// Criando o gráfico para Steam
const ctxSteam = document.getElementById('steamChart').getContext('2d');
new Chart(ctxSteam, {
    type: 'line',
    data: steamData
});

// Criando o gráfico para Instagram
const ctxInstagram = document.getElementById('instagramChart').getContext('2d');
new Chart(ctxInstagram, {
    type: 'bar',
    data: instagramData
});

// Criando o gráfico para Xbox
const ctxXbox = document.getElementById('xboxChart').getContext('2d');
new Chart(ctxXbox, {
    type: 'line',
    data: xboxData
});

// Criando o gráfico para WhatsApp
const ctxWhatsapp = document.getElementById('whatsappChart').getContext('2d');
new Chart(ctxWhatsapp, {
    type: 'bar',
    data: whatsappData
});
