/*
@param - n: number
@returns - boolean

PROGRAMME isSquare(n):
    set last_product to equal 0
    WHILE(last_product < n):
        FOR i=0 to n:
            set last_product to equal i*i
            IF i*i equals n:
                RETURN true
            END IF.
        END FOR.
    END WHILE.
    RETURN false
*/

function isSquare(n: number): boolean {
    if(n === 0){
        return true
    }
    let previousProduct = 0;
    while(previousProduct < n && n>=0){
        for(let i=0; i<=n; i++){
            previousProduct = i*i;
            if(previousProduct === n){
                return true
            }
        }
    }
    return false
}

export default isSquare