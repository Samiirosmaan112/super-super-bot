client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(MzgzMTcyMzgwMDQzNzcxOTA2.DPnDMw.Q-vT4KWI4ON0ClX3CBtix1pdPzc);
