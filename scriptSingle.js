let count= 0, value, player1, player2, player1Name, player2Name, scorePlayer1= 0, scorePlayer2= 0, scoreDraw= 0, gameCamp= [["","",""],["","",""],["","",""]], chatMessageCounter= 2, chatScreen= document.querySelector("#chat-screen")
let space1= document.querySelector("#space1"), space2= document.querySelector("#space2"), space3= document.querySelector("#space3"), space4= document.querySelector("#space4"), space5= document.querySelector("#space5"), space6= document.querySelector("#space6"), space7= document.querySelector("#space7"), space8= document.querySelector("#space8"), space9= document.querySelector("#space9")
let openButton= document.querySelector(".chat-buttons#open-button"), chatFull= document.querySelector("#chat")

const Modal= {
    open(){
        document.querySelector("div#modal-win").classList.add("active")
    },

    close(){
        document.querySelector("div#modal-win").classList.remove("active")
        Table.spaceClean()
    },

    closeNameSelectionSingleplayer(){
        let name1= document.querySelector("input#player1-name"), nameScore1= document.querySelector("input#name1.score-name"), points1= document.querySelector("input#points1"), points2= document.querySelector("input#points2"), pointsDraw= document.querySelector("input#points3")
        
        player1Name= name1.value; player2Name= "Harry"
        nameScore1.value= name1.value; name1.value= ""
        points1.value= 0; points2.value= 0; pointsDraw.value= 0

        document.querySelector("div#modal-name-selection").classList.remove("active")
        Modal.openSelectionArea()
    },

    openSelectionArea(){
        document.querySelector("div#modal-selection").classList.add("active")
    },

    closeSelectionX(){
        value= "X"
        player1= "X"
        player2= "O"
        document.querySelector("div#modal-selection").classList.remove("active")
    },

    closeSelectionO(){
        value= "O"
        player1= "O"
        player2= "X"
        document.querySelector("div#modal-selection").classList.remove("active")
    },

    openNameSelection(){
        document.querySelector("div#modal-name-selection").classList.add("active")
    },
}

const Table= {
    spaceClean(){
        let nameSpace, x= 1

        for (let i = 0; i < 9; i++) {
            nameSpace= 'space'+x

            {
                document.getElementById(nameSpace).value= ""
                document.getElementById(nameSpace).classList.remove("player1Red")
                document.getElementById(nameSpace).classList.remove("player2Blue")
            }
            
            x++
        }

        for (let x= 0; x<3; x++) {
            for (let y= 0; y<3; y++) {
                gameCamp[x][y]= ""
            }
        }
    },

    victoryPlayer(){
        if(value == player1){
            document.querySelector("p#text-change").innerHTML= `O(A) vencedor(a) é o(a) <em>${player1Name}</em>!!<br>Agora é a vez do(a) <em>${player2Name}</em>`
            scorePlayer1++
            document.querySelector("input.score-point#points1").value= scorePlayer1
        } else{
            document.querySelector("p#text-change").innerHTML= `O(A) vencedor(a) é o(a) <em>${player2Name}</em>!!<br>Agora é a vez do(a) <em>${player1Name}</em>`
            scorePlayer2++
            document.querySelector("input.score-point#points2").value= scorePlayer2
        }
    },

    victory(){
        const row1= gameCamp[0][0] == value && gameCamp[0][1] == value && gameCamp[0][2] == value, row2= gameCamp[1][0] == value && gameCamp[1][1] == value && gameCamp[1][2] == value, row3= gameCamp[2][0] == value && gameCamp[2][1] == value && gameCamp[2][2] == value
        const colum1= gameCamp[0][0] == value && gameCamp[1][0] == value && gameCamp[2][0] == value, colum2= gameCamp[0][1] == value && gameCamp[1][1] == value && gameCamp[2][1] == value, colum3= gameCamp[0][2] == value && gameCamp[1][2] == value && gameCamp[2][2] == value
        const sideRow1= gameCamp[0][0] == value && gameCamp[1][1] == value && gameCamp[2][2] == value, sideRow2= gameCamp[0][2] == value && gameCamp[1][1] == value && gameCamp[2][0] == value, victoryCondition = row1 || row2 || row3 || colum1 || colum2 || colum3 || sideRow1 || sideRow2
        const drawCondition= gameCamp[0][0] != "" && gameCamp[0][1] != "" && gameCamp[0][2] != "" && gameCamp[1][0] != "" && gameCamp[1][1] != "" && gameCamp[1][2] != "" && gameCamp[2][0] != "" && gameCamp[2][1] != "" && gameCamp[2][2] != ""

        if(victoryCondition){
            Table.victoryPlayer()
            Modal.open()
        } else if(drawCondition){
            count--
            scoreDraw++
            document.querySelector("input.score-point#points3").value= scoreDraw
            document.querySelector("p#text-change").innerHTML= "Empate!!"
            Modal.open()
        }
    },

    space1(){
        space1.value= player1
        gameCamp[0][0]= player1
        space1.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space2(){
        space2.value= value
        gameCamp[0][1]= value
        space2.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space3(){
        space3.value= value
        gameCamp[0][2]= value
        space3.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space4(){
        space4.value= value
        gameCamp[1][0]= value
        space4.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space5(){
        space5.value= value
        gameCamp[1][1]= value
        space5.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space6(){
        space6.value= value
        gameCamp[1][2]= value
        space6.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space7(){
        space7.value= value
        gameCamp[2][0]= value
        space7.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space8(){
        space8.value= value
        gameCamp[2][1]= value
        space8.classList.add("player1Red")
        Harry.action()
        Table.victory()
    },
    space9(){
        space9.value= value
        gameCamp[2][2]= value
        space9.classList.add("player1Red")
        Harry.action()
        Table.victory()
    }
}

const Harry= {
    play(){
            if(space1.value == player2){
                    space1.classList.add("player2Blue")
            } else if(space2.value == player2){
                    space2.classList.add("player2Blue")
            } else if(space3.value == player2){
                    space3.classList.add("player2Blue")
            } else if(space4.value == player2){
                    space4.classList.add("player2Blue")
            } else if(space5.value == player2){
                    space5.classList.add("player2Blue")
            } else if(space6.value == player2){
                    space6.classList.add("player2Blue")
            } else if(space7.value == player2){
                    space7.classList.add("player2Blue")
            } else if(space8.value == player2){
                    space8.classList.add("player2Blue")
            } else if(space9.value == player2){
                space9.classList.add("player2Blue")
            }
        },
        
        campSelection(){
            
        },
        
        action(){
            Harry.campSelection()
            Harry.play()
        }
}

const Chat= {
    chatOpen(){
        openButton.classList.remove("active")
        chatFull.classList.add("active")
    },
    chatClose(){
        openButton.classList.add("active")
        chatFull.classList.remove("active")
    },
    message(message, messageText){
        let chatScreen= document.querySelector("div#chat-screen"), messageFinal= document.createTextNode(messageText)

        message.appendChild(messageFinal)
        chatScreen.appendChild(message)
        message.classList.add("message")

        return message
    },

    enterMessage(){
        let message= document.createElement("div"), messageTextImplement= document.querySelector("input#message-camp").value, messageText= `${player1Name}: ${messageTextImplement}`
        
        Chat.message(message, messageText)
        message.classList.add("player")

        document.querySelector("input#message-camp").value= ""
        Chat.screenAjust()
        Chat.harryMessage(messageTextImplement)
    },

    harryMessage(playerMessage){
        let message= document.createElement("div"), messageTextImplement= ""
        String(playerMessage)
        playerMessage.prototype.toUpperCase()

        if(playerMessage.includes("OLÁ") || playerMessage.includes("OLA") || playerMessage.includes("OI")){
            messageTextImplement= `Olá ${player1Name}!`
        } else if("TUDO BEM" in playerMessage){
            messageTextImplement= `Estou muito bem! E você ${player1} ?`
        } else if("ESTOU BEM" in playerMessage){
            messageTextImplement= `Que bom, fico feliz em saber!`
        }

        let messageText= `${player1Name}: ${messageTextImplement}`
        Chat.message(message, messageText)
        message.classList.add("harry")

        Chat.screenAjust()
    },

    screenAjust(){
        if(chatMessageCounter < 10){
            let screenA= chatMessageCounter-1

            chatScreen.classList.remove(`screen${screenA}`)
            chatScreen.classList.add(`screen${chatMessageCounter}`)

            chatMessageCounter++
        } else{
            chatScreen.firstElementChild.remove()
        }
    }
}