
write_block = proc { |file| file.write("Hello World") }
open("file.txt", &write_block)

