const express = require('express');
const app = express();
const opener = require('opener');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Riverstone Games | Premium Digital Studio" });
});

app.get('/games', (req, res) => res.render('games', { title: "Games - Riverstone" }));
app.get('/web', (req, res) => res.render('web', { title: "Web Development - Riverstone" }));
app.get('/apps', (req, res) => res.render('apps', { title: "App Development - Riverstone" }));
app.get('/portfolio', (req, res) => res.render('portfolio', { title: "Our Portfolio" }));
app.get('/contact', (req, res) => res.render('contact', { title: "Contact Us" }));
app.get('/about', (req, res) => res.render('about', { title: "About Us | Riverstone Games" }));
app.get('/privacy', (req, res) => res.render('privacy', { title: "Privacy Policy | Riverstone Games" }));
app.get('/terms', (req, res) => res.render('terms', { title: "Terms & Conditions | Riverstone Games" }));
app.get('/signin', (req, res) => {res.render('signin', { title: "Sign In | Riverstone Games" });});
// 🎯 গুগল অ্যাডমব ভেরিফিকেশনের জন্য সরাসরি ডাইনামিক রাউট
app.get('/app-ads.txt', (req, res) => {
    res.type('text/plain');
    res.send('google.com, pub-5281833840576429, DIRECT, f08c47fec0942fa0');
});

const PORT = process.env.PORT || 3000; // ডাইনামিক পোর্ট সেট করা হলো
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});