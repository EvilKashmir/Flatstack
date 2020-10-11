require_relative 'next_num'

class LookAndSay
  def self.look_and_say(num)
    puts str = '1'
    (0...(num - 1)).each do |_|
      str = NextNum.next_num(str)
      puts str
    end
  end
end
