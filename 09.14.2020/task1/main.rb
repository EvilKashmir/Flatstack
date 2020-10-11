require_relative 'look_and_say'

class Main
  puts 'Enter number of sequence'
  input = gets.chomp.to_i
  if input.positive?
    puts
    LookAndSay.look_and_say(input)
  else
    puts 'Try again'
  end
end