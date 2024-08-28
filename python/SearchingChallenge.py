def SearchingChallenge(strParam):
    if strParam == 'No words':
        return -1

    else:

        alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        strParamSplit = strParam.split()
        palavra = strParam.split()
        qtd = len(palavra)
        soma_rep = []

        if qtd == 0:
            return -1

        else:

            m_palavra = palavra[0]

            for i in range(qtd):
                palavra[i] = palavra[i].lower()

                soma_rep.append(0)

                for j in range(26):

                    rep = palavra[i].count(alfabeto[j])

                    if rep >= 2:
                        soma_rep[i] += rep
                    else:
                        soma_rep[i] += 0

                if soma_rep[i] > soma_rep[i-1]:
                    m_palavra = str(strParamSplit[i])

        return m_palavra


# keep this function call here
print(SearchingChallenge(input()))
