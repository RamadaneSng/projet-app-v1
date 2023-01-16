const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();

const { UserModel } = require('../models/userModel');

router.get('/gets', (req, res) => {
    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
            }
            bcrypt.compare(req.body.mdp, user.mdp)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: 'TOKEN'
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
});

router.post('/posts', (req, res) => {
    bcrypt.hash(req.body.mdp, 8)
        .then(hash => {
            const user = new UserModel({
                nom: req.body.nom,
                email: req.body.email,
                mdp: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
       



})



module.exports = router;


