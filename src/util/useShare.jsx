function useShare(rows, day, win) {
    rows = rows.filter(item => item.length != 0);
    const length = rows.length;
    var message = `Turdle Day ${day} 💩 \n\n ${length}/4\n`;
    for(var i = 0; i < length; i++) {
        for(var j = 0; j < rows[i].length; j++) {
            if(rows[i][j] == 0) {
                message += '⬜';
            } else if(rows[i][j] == 1) {
                message += '🟨';
            } else if(rows[i][j] == 2) {
                message += '🟩';
            }
        }
        if(i != length - 1) {
            message += '\n'; 
        }
    }
    if(win) {
        return message;
    } else {
        return `Turdle Day ${day} 💩 \n\n 💩/4`;
    }
}

export default useShare