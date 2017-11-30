#ciphertool recognizes and decrypts simple ciphers
#base64, caesar, substitution, mirror, morse, letters to numbers, MD5
import sys
import argparse
import string
import hashlib
import base64
import re

#command line args
parser = argparse.ArgumentParser()
parser.add_argument('input', help='input string or file')
parser.add_argument('-s', '--string', help='string of ciphertext', action='store_true')
parser.add_argument('-f', '--file', help='txt file with cipher', action='store_true')
parser.add_argument('-c', '--caesar', help='brute force caesar cipher', action='store_true')
parser.add_argument('-b64', '--base64', help='decode base64', action='store_true')
parser.add_argument('-m', '--morse', help='decode morse code', action='store_true')
parser.add_argument('-l2n', help='decode letters to numbers cipher', action='store_true')
parser.add_argument('-mr', '--mirror', help='decode mirror cipher', action='store_true')
parser.add_argument('-md5', help='google search result for plaintext of MD5 hash', action='store_true')
args = parser.parse_args()

class caesar(object):
    def rot(self, text, n):   #rotates text by n positions
        output = ''
        for char in text:
            if char in string.ascii_lowercase:
                x = ord(char)
                if (x >= ord('a') and x <= ord('z')):
                    x += n
                    if (x > ord('z')):
                        x = (ord('a')-1) + (x - ord('z'))
                    output += chr(x)
                else:
                    output += char
            if char in string.ascii_uppercase:
                x = ord(char)
                if (x >= ord('A') and x <= ord('Z')):
                    x += n
                    if (x > ord('Z')):
                        x = (ord('A')-1) + (x - ord('Z'))
                    output += chr(x)
                else:
                    output += char
        return output

    def brute(self, ct):
        for i in range(1, 26):
            pt = self.rot(ct, i)
            if ('flag' in pt) or ('ctf' in pt):
                print(colored(pt, 'red'))
            else:
                print(pt)


def b64decode(ct):
    print(base64.b64decode(ct))

def morse(ct):
    pt = ''
    mdict = {'-': 'T', '-.--': 'Y', '.': 'E', '-.-': 'K', '..---': '2', '.--': 'W', '-.': 'N', '.--.': 'P', '.-.': 'R', '...': 'S', '.---': 'J', '-..-': 'X', '...--': '3', '...-': 'V', '-....': '6', '--..': 'Z', '---': 'O', '-.-.': 'C', '-..': 'D', '----.': '9', '--.': 'G', '..-': 'U', '---..': '8', '-...': 'B', '..': 'I', '.-..': 'L', '....-': '4', '..-.': 'F', '....': 'H', '.-': 'A', '--': 'M', '--...': '7', '.....': '5', '--.-': 'Q', '-----': '0', '.----': '1'}
    for letter in ct.split(' '):
        pt += str(mdict.get(letter))
    print(pt)

def letter2num(ct):
    pt = ''
    udict = {'J': 10, 'Y': 25, 'H': 8, 'B': 2, 'M': 13, 'K': 11, 'V': 22, 'L': 12, 'Z': 26, 'G': 7, 'N': 14, 'X': 24, 'U': 21, 'I': 9, 'E': 5, 'T': 20, 'Q': 17, 'R': 18, 'C': 3, 'O': 15, 'F': 6, 'A': 1, 'P': 16, 'S': 19, 'W': 23, 'D': 4}
    ldict = {'u': 21, 'e': 5, 'r': 18, 's': 19, 'z': 26, 'o': 15, 'p': 16, 'i': 9, 'k': 11, 'c': 3, 'h': 8, 'b': 2, 'a': 1, 'j': 10, 'd': 4, 't': 20, 'm': 13, 'f': 6, 'v': 22, 'g': 7, 'q': 17, 'w': 23, 'l': 12, 'x': 24, 'y': 25, 'n': 14}
    for i in ct:
        if i in udict:
            pt += str(udict[i])
        elif i in ldict:
            pt += str(ldict[i])
        else:
            pt += i

def mirror(ct):
    pt = ct[::-1]
    print(pt)

def main():
    if args.string:
        ciphertext = args.input
    elif args.file:
        with open(args.input, 'r') as file:
            ciphertext = file.read()
    else:
        print("please specify -s or -f")
        exit()

    ismorse = re.match('^[\.\-\s]*$', ciphertext)
    isbase64 = len(ciphertext.strip()) % 4 == 0

    if isbase64 or args.base64:
            try:
                b64decode(ciphertext)
            except:
                None
    if ismorse or args.morse:
        morse(ciphertext)
    if args.caesar:
        caesar().brute(ciphertext)
    if args.mirror:
        mirror(ciphertext)
    if not (args.caesar or args.base64 or args.morse or args.mirror):
        caesar().brute(ciphertext)


if __name__ == '__main__':
    main()
