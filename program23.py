def isPalindrome(text1):
    text1 = text1.lower()

    text1 = ''.join(chr for chr in text1 if chr.isalnum())

    text2 = text1[::-1]

    if text1 == text2:
        return True
    else:
        return False
    

Palindrome = input("Enter your word:")

if isPalindrome(Palindrome):
    print (Palindrome + " is a palindrome")
else:
    print (Palindrome + " is not a palindrome")
