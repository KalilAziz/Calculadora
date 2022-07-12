//Vamos utilizar uma factory function. Poderiamos fazer em uma função normal, por que não faz sentido ficar criando várias calculadoras, mas faremos dessa forma para treinar a factory function
function Calculadora(){
        //atributos:
        this.display = document.querySelector('.display')


        //metodos:
        this.inicia = () =>{
            this.cliqueBotoes()
            this.precisonaEnter()
        }

        this.cliqueBotoes = () =>{
            document.addEventListener('click', e =>{
                const el = e.target
                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)
                if(el.classList.contains('btn-clear')) this.clearDiplay()
                if(el.classList.contains('btn-del')) this.deleteOne()
                if(el.classList.contains('btn-eq')) this.realizaConta()
            });
        }

        this.precisonaEnter = function(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode ===13){
                    this.realizaConta()
                }
            })
        }

        this.btnParaDisplay = (valor) => {
            this.display.value += valor
            this.display.focus()
        }

        this.clearDiplay = () => this.display.value = ''
        this.deleteOne = () => this.display.value = this.display.value.slice(0, -1) //O slice retira o ultimo valor da string

        this.realizaConta = () => {
            let conta = this.display.value
            try {
                conta = eval(conta) //Eval serve para efetuar contas utilizando strings
                if(!conta){
                    alert('Conta inválida')
                    return
                }
            this.display.value = conta
            } catch (error) {
                alert('Conta inválida')
                return
            }
        }
    }
    const calculadora = new Calculadora()
    calculadora.inicia()
