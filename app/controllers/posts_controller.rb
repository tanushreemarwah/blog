class PostsController < ApplicationController
	def index
		@posts = Post.all 
	end

	def show
		@post = Post.find(params[:id])

	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.create(
			title: params[:post][:title], 
			content: params[:post][:content]
			# user_id: current_user 
			)

		if @post.save
			redirect_to posts_path 
		else
			render "new"
		end
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])

		if @post.update(
			title: params[:post][:title] ,
			content: params[:post][:content]
			# user_id: current_user
			)
			redirect_to posts_path 
		else
			render "edit"
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		redirect_to posts_path
	end

	# only index, new, create and show have view files...edit, update and destroy are just actions, which redirect the page to any of the other actions 
	# index is the default page (like homepage) 

end
