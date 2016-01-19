function holidays(year){                
    let holidays = [];
    let easter = getEaster(year).getTime();
    let oneday = 86400000;

    holidays.push([ new Date(easter-(49*oneday)),          'Fastelavn', 'mærke' ]); 
    holidays.push([ new Date(easter-(7*oneday)),           'Palmesøndag', 'hellig' ]);
    holidays.push([ new Date(easter-(3*oneday)),           'Skærtorsdag', 'hellig' ]);
    holidays.push([ new Date(easter-(2*oneday)),           'Langfredag', 'hellig' ]);
    holidays.push([ new Date(easter),                    'Påskedag', 'hellig' ]);
    holidays.push([ new Date(easter+(1*oneday)),           '2. påskedag', 'hellig' ]);
    holidays.push([ new Date(easter+(26*oneday)),          'Store bededag', 'hellig' ]);
    holidays.push([ new Date(easter+(39*oneday)),          'Kristi Himmelfartsdag ', 'hellig' ]);
    holidays.push([ new Date(easter+(49*oneday)),          'Pinsedag', 'hellig' ]);
    holidays.push([ new Date(easter+(50*oneday)),          '2. pinsedag', 'hellig' ]);
    holidays.push([ new Date(year, 0, 1),     'nytårsdag', 'mærke' ]);
    holidays.push([ new Date(year, 1, 14),     'Valentinsdag', 'mærke' ]);
    holidays.push([ new Date(year, 5, 5),     'Grundlovs dag', 'hellig' ]);
    holidays.push([ new Date(year, 11, 24),     'juleaften', 'mærke' ]);
    holidays.push([ new Date(year, 11, 25),     'juledag', 'hellig' ]);
    holidays.push([ new Date(year, 11, 26),     '2. juledag', 'hellig' ]);
    holidays.push([ new Date(year, 11, 31),     'nytårs aften', 'mærke' ]);        
    return holidays;
}

function getEaster(Y) {
    var C = Math.floor(Y/100);
    var N = Y - 19*Math.floor(Y/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40)/44);
    var D = L + 28 - 31*Math.floor(M/4);

    return new Date(Y, M, D);
}
