tasks = ["homework", "clean room", "exercise"]

user_question = input("Are you sure you want to delete all tasks? (yes/no): ")

if user_question == "yes":
    tasks.clear()

    print(tasks)

elif user_question == "no":
    print("get to work")

else:
    print("not what i asked")