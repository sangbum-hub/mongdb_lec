

for idx in range(1, 21):

    post_data["page"] = idx

    res = requests.post(url, data=post_data)
    soup = BeautifulSoup(res.content, "html.parser")


    actors = soup.select("li.people_li div.name")
    hits   = soup.select("ul.num_info > li > strong")
    movies = soup.select("ul.mov_list")
    rankings = soup.select("li.people_li > span.grade")

    for idx, actor in enumerate(actors):
        actor_name   = (actor.text).split("(")[0]
        actor_hits   = int(hits[idx].text.replace(",",""))
        movie_titles = movies[idx].select("li a span")

        movie_title_list = []
        for movie_title in movie_titles:
            # print(movie_title.text)
            movie_title_list.append(movie_title.text)

        actors_info_dict = { }
        actors_info_dict["배우이름"] = actor_name
        actors_info_dict["흥행지수"] = actor_hits
        actors_info_dict["출연영화"] = movie_title_list
        actors_info_dict["랭킹"] = rankings[idx].text


        actor_link = "http://www.cine21.com" + actor.select_one("a").attrs["href"]
        actor_resp = requests.get(actor_link)    

        actor_soup = BeautifulSoup(actor_resp.content, "html.parser")

        default_info  = actor_soup.select_one("ul.default_info")
        actor_details = default_info.select("li")


        for actor_item in actor_details:           
            actor_item_key = actor_item.select_one("span.tit").text
            actor_item_value = re.sub("<span.*?>.*?</span>", "", str(actor_item))
            actor_item_value = re.sub("<.*?>", "", actor_item_value)

            actors_info_dict[actor_item_key] = actor_item_value

        actors_info_list.append(actors_info_dict)    

    
actors_info_list  
