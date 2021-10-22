/**
 * Q.1 - (Leia até o final para um melhor entendimento)
 * Para essa questão você irá precisar utilizar a "Perk Tree"
 * das skills de Two-handed do jogo "The Elder Scrolls V - Skyrim" que
 * se encontra no link a seguir:
 * @link https://skyrim-requiem.fandom.com/wiki/Two-Handed?file=Two-Handed.png
 * 
 * A questão consiste em 2 etapas:
 * 1ª etapa: desenvolva um algoritmo que crie cada um dos Perks (na imagem
 * fornecida, são as bolinhas pretas) que chamaremos de Nó. Após criar cada
 * nó deve ser criada uma referencia para os nós adjacentes.
 * Ex: O nó "Great weapon Mastery" conhece o "Barbaric Might" já
 * o "Devastating Charge" conhece o "Barbaric Might" e o "Cleave".
 * 
 * 2ª Etapa: printar cada Nó com suas com seus respectivos nós adjacentes.
 * Ex.:
 * {
 *  great_weapon_mastery: [ 'barbaric_might' ],
 *  devastating_charge: [ 'barbaric_might', 'cleave' ],
 *  battle_axe_focus: [ 'barbaric_might' ]
 *  ...
 * }
 * 
 * OBS.: (Não é obrigatório a utilização de ponteiro ou de linguagem específica)
 */
Resposta: 

class great_weapon_mastery():
    def init(self,nome):
        self.nome = nome
        
    
    def str(self):
        print(self.nome)


class barbaric_might(great_weapon_mastery):
    def _init_(self, nome):
        super()._init_(nome)
        
class warhammer_focus(barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class battle_axe_focus(barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class greatsword_focus(barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class devastating_charge(barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class devastating_strike(barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class cleave(devastating_strike, barbaric_might):
    def _init_(self, nome):
        super()._init_(nome)
        
class devastating_cleave(cleave):
    def _init_(self, nome):
        super()._init_(nome)

class mighty_strike(devastating_cleave):
    def _init_(self, nome):
        super()._init_(nome)

// Usei a POO (Herança) para resolver a questão, mas também é possivel responder a partir de estrutura de grafos. //
