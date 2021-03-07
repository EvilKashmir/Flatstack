require "sinatra"
require "sinatra/reloader" if development?
require "pg"
require "byebug"

require_relative "to_do"

configure { set :server, :puma }


get "/" do
  "Hello world!"
end

get "/todos" do
  @result = ToDo.all

  erb :index
end

get "/todos/new" do
  erb :new
end

get "/todos/:id/edit" do
  @result = ToDo.where(params)[0]

  erb :edit
end

get "/todos/:id" do
  @result = ToDo.where(params)[0]

  erb :show
end

post "/todos" do
  if params["custom_method"] == "DELETE"
    ToDo.new(ToDo.where(params)[0]).delete

    redirect to("/todos")
  else
    @result = ToDo.new(params).save

    redirect to("/todos/#{@result[0]["id"]}")
  end
end

post "/todos/:id" do
  if params["custom_method"] == "PUT"
    @result = ToDo.new(ToDo.where(params).first).update(params)

    redirect to("/todos/#{params["id"]}")
  end
end
