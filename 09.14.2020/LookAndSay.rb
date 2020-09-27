def next_num(str)
	i = 0
	res = ""
	while i < str.length
		count = 1
		while (i + 1 < str.length) and (str[i] == str[i+1])
			count += 1
			i += 1
		end
		res = res + "#{count}" + "#{str[i]}"
		i += 1
	end
	return res
end

def look_and_say(num)
	puts str = '1'
	for i in 0...num-1
		str = next_num(str)
		puts str
	end
end

puts "Enter number of sequence"
input = gets.chomp.to_i
if input > 0
	puts
	look_and_say(input)
else
	puts "Try again"
end


