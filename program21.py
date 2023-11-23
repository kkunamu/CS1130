def letter(N):
    if 90 <= N <= 100:
        return 'A'
    elif 80 <= N <= 89:
        return 'B'
    elif 70 <= N <= 79:
        return 'C'
    elif 60 <= N <= 69:
        return 'D'
    elif N < 60:
        return 'F'

def main():
    counter = 1
    passed = 0
    failed = 0
    grade = 0
    total = 0
    highest = 0
    lowest = 0

    while True:
        print(f"#{counter} Enter grade:", end=" ")
        grade = float(input())

        if grade > 100:
            print("Please enter a grade between 0 - 100.")
            continue

        if grade < 0:
            break

        print(f"Letter Grade: {letter(grade)}")

        total += grade

        if counter == 1:
            highest = grade
            lowest = grade

        counter += 1

        if grade >= 60:
            passed += 1
        else:
            failed += 1

        if grade > highest:
            highest = grade
        elif lowest > grade:
            lowest = grade

    print("\n")
    
    if counter == 1:
        average = 0
    else:
        average = total / (counter - 1)

    print(f"Class average is {average}")
    print(f"The number of students who failed is {failed}")
    print(f"The number of students who passed is {passed}")
    print(f"The lowest grade is {lowest}")
    print(f"The highest grade is {highest}\n")


if __name__ == "__main__":
    main()
