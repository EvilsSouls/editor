let code = {"blocks":[]};

window.onload = () => {
    startup();
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    code = JSON.parse(decode(sessionStorage.import));
    rendBlocks();
}

function rendBlocks(){
    var codeSpace = document.getElementById('codeBlocks') as HTMLDivElement;
    var messages = ["Boo.", "Boo, again!", "Hello.", "Hello!", "Call me bob the comment?", "Nice to meet you.", "GeorgeRNG :D", "What did the farmer say when he lost his tractor? Where's my tractor?", "Beyond that.", "Maybe it's gold.", "Au-."];
    codeSpace.innerHTML = `<!-- ${messages[Math.floor(Math.random() * messages.length)]} -->`; // hi
    code.blocks.forEach((value : {"id":string,"block":string}) => {
        console.log(value)
        if(value.id == "block"){
            var block = document.createElement('div');
            block.classList.add('block');

            var stack = document.createElement('div');

            var topper = document.createElement('div');
            topper.classList.add(['player_action'].includes(value.block) ? 'chest' : 'air');
            stack.appendChild(topper)

            var blockElement = document.createElement('div');
            blockElement.classList.add(value.block, 'mat');
            stack.appendChild(blockElement)

            var sign = document.createElement('div');
            sign.classList.add('sign');
            blockElement.appendChild(sign);

            block.appendChild(stack);
            if(!['if_player'].includes(value.block)){
                var stone = document.createElement('stone');
                stone.classList.add('stone');
                block.appendChild(stone)
            }

            codeSpace.appendChild(block);
        }
    })
}



function decode(base64data : string){
    var compressData = atob(base64data);
    var uint = compressData.split('').map(function(e) {
        return e.charCodeAt(0);
    });
    var binData = new Uint8Array(uint);
    var data = pako.inflate(binData);
    return String.fromCharCode.apply(null, new Uint16Array(data) as unknown as []);
  }
function encode(codedata : string){
    var data = pako.gzip(codedata);
    var data2 = String.fromCharCode.apply(null, new Uint16Array(data) as unknown as []);
    return btoa(data2);
  }