// index, show, store, update, destroy
// index = listagem de sessoes
// show = unica listagem
//  Store = criar sessão
// uptade = alterar uma sessao
// destroy = destroi uma sessao
const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { email } = req.body

        // Procura se ja existe o email criado
        let user = await User.findOne({ email })
        
        //  Se não, ele cria o usuário
        if(!user){
             user = await User.create({ email })
        }

        return res.json(user)
    }
}