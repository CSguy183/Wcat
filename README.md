# Wcat

Implementing a clone of cat command in linux for windows and mac OS using node environment

Users can perform the following operations : 

1.  <strong> remove spaces </strong> -
  Remove white spaces in all files mentioned in command.
  
     command -> wcat -rs fileName1 fileName2 ..

2. <strong> remove new line </strong> -
  Remove new line in all files mentioned in command.
  
    command -> wcat -rn fileName1 fileName2 ..
  
3. <strong> remove specific char </strong> -
   Remove specific character or group of characters form all files mentioned in command.
   
    command -> wcat -rsc fileName %string
4. <strong> remove large spaces </strong> -
  Remove large spaces in all files mentioned in command.
  
    command -> wcat -rls fileName
  
5. <strong> add number to each line </strong> -
  Add number in the starting of all lines (indicating line number) in all files mentioned in command.
  
    command -> wcat -an fileName
  
6. <strong> add number to non empty line </strong> -
  Add number in the starting of all non empty lines (indicating line number) in all files mentioned in command.
  
    command -> wcat -annel fileName
