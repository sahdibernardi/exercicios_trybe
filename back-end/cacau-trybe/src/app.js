const express = require('express');

const app = express();

const chocolates = [
    { id: 1, name: 'Mint Intense', brandId: 1 },
    { id: 2, name: 'White Coconut', brandId: 1 },
    { id: 3, name: 'Mon Chéri', brandId: 2 },
    { id: 4, name: 'Mounds', brandId: 3 },
  ];

// set root with message
app.get('/', (req, res) => res.status(200).json(
    { message: 'Welcome to Chocolate-trybe API' },
    ));

// set chocolates endpoint
app.get('/chocolates', (req, res) => res.status(200).json({ chocolates }));

// get chocolate by ID
app.get('/chocolates/:id', (req, res) => {
    const { id } = req.params;

    const chocolate = chocolates.find((c) => c.id === Number(id));
  
    if (!chocolate) {
    res.status(404).json({ message: 'This ID do not match a chocolate :( please try another one' });
    }
    res.status(200).json({ chocolate });
});
    
// get chocolate by BrandId
app.get('/chocolates/brand/:brandId', (req, res) => {
    const { brandId } = req.params;

    const brands = chocolates.filter((b) => b.brandId === Number(brandId));
  
    if (brands.length === 0) {
      res.status(404).json({ message: 'This ID do not match any brand :( please try another one' });
    }
    res.status(200).json({ brands });
});

module.exports = app;