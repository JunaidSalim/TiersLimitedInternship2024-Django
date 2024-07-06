file_path = 'file.txt' 

with open(file_path, 'r') as file:
    for line in file:
        print(line.strip())
