/* 
* Given a number 'n', return the number of positive odd numbers below n
* @param - number, 'n'
* returns - number, 'oddsSum'

PROGRAMME oddCount(n):
    IF n is odd:
        RETURN n+1/2
    ELSE:
        RETURN n/2
    END IF.
END.

*/

function oddCount(n: number): number {
    return n%2 === 0 ? n/2:(n-1)/2
}

export default oddCount