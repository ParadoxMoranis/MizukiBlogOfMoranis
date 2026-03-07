---
title: 中国大学生计算机科学学习路线推荐
published: 2026-02-20
pinned: false
description: 本篇文章主要讲述一下计算机专业学生的学习路线，仅作参考，读者应结合自身教育情况选择适合自己的方法。
tags: [Study, CS, University]
category: Study Guide
author: MoranisZ
draft: false
date: 2026-02-20
image: ''
---
# 引言
我了解过不少高校的计算机专业的教育方案和学习路线，无论是北京大学这种TOP2，还是一些普通本科院校，我都有所了解。不过说实在的，我肯定还是更清楚自己的院校情况。但我想说，作为科班学生，我们有很多通用的基本功需要掌握，而这些恰恰是大部分院校并不教授的，但这部分知识和技能却非常有用。所以我写下这篇文章，希望能促进大家自行学习CS技术，也帮助大家更好地规划本科阶段的学习时间。

## 我的情况
事情是大一的时候遇到了已经工作多年的前辈，同样是中国高校教育出来的人，他深知我们现在的高校教育，尤其是本科阶段的教育，缺失了很多应该掌握的基本功。所以他一直带我学技术，我呢也很有兴趣，因此我经常旷课，自己研究，自己的绩点相当的低，是全年级的倒数。也没少挂科，重修。虽然后面有幸进入了ICALL实验室并有机会参与科研，但是我想说，我这样的取舍是非常错误的，所以我想为读者做一份我理想的规划。

## Like Me？
在往下读之前，请你思考：
- 你的学校是否会教前沿/实践/常用技术？比如Docker，Linux，Web，后端，数据库，算法等等对我们 **找工作** 有益处的内容。
- 你是否和我一样不卷绩点，综测等一系列成绩，不准备竞争保研？
- 你是否和我一样喜欢计算机技术？
- 你是否准备从事这方面的职业？

如果你的学校不教，你又想拥有丰富的技能，还和我一样不卷成绩、时间充裕，那你可以参考我的学习方法和规划。

## 规划
我在前面讲过了，我已经执行的学习路线是错误的，或者说是不理想的。因为我发现学校的课程和我们自己学习并不冲突，也不会和我们的娱乐冲突，尤其是大一大二和不考研的同学，时间还够，一切还来得及。
所以，我的推荐的学习规划的第一个要点就是不要荒废学校的课程，主要有两点：
- 可以说，学校的几乎所有课程对我们都有益无害，而且并不与我们自我提升相冲突。
- 挂科，重修真的对很多事情有影响，比如拖延我们的考研进度，占用我们的时间等。

第二点，循序渐进，稳扎稳打

说这个是因为了解我的同学知道，我写过或者说了解、熟悉的技术栈比较多，我就不一一列出了，我担心大家好大喜功而忘记了踏踏实实的学习和掌握。我的理想情况就是每天，甚至说每个工作日，拿出1-2小时的空闲时间去学习那些没人教的技术。现在的知识门槛都很低，大家学习起来也有很多资源。

第三点，持之以恒

做任何事情都是一样的，贵在坚持，如果你三天打鱼两天晒网，那我还是推荐你将那1-2小时放在Steam上吧，那是学不会的，还不如多玩一会儿游戏。

## 学什么？
我的博客上有很多我折腾Arch的文章，所以我自然会推荐 **Linux** 作为第一个学习内容。
我之所以推荐Linux，不仅仅是因为很多东西都要部署或者运维到服务器上，更是因为Linux作为我们的开发环境也是很舒服的。相比于Windows的臃肿，Linux的哲学就是更适合开发人员的。
我是人工智能专业的，我认为对于我们来说，Linux不需要我们了解底层，只需要会用，懂得命令，懂得文件系统，会搭建开发环境和生产环境即可。慢慢用的多了，就可以折腾更多东西了。

其次就是**Docker**，docker+Linux就是现代化运维的标准答案。大家想了解更多的话自行学习，我不过多赘述。

对于很多同学来说，了解、尝试各种编程语言也是很重要的。你可以趁着时间充裕，选择你喜欢的语言和技术方向并深入学习。比如有人决定研究Java Spring，有的人研究Go Gin，有的人研究Qt等等，总之这是你自己的选择。

最后，大家一定要掌握一些通用的基本功，比如算法，计算机网络等等。

## 技术栈与学习资源

### Linux基础
Linux是开发者必备的技能，建议优先学习。
- [《鸟哥的Linux私房菜》](https://linux.vbird.org/) - 经典入门教程
- [Linux命令大全](https://wangchujiang.com/linux-command/) - 在线命令查询工具

::github{repo="jaywcjlove/linux-command"}

### Web相关

#### 前端开发
- **HTML/CSS/JavaScript 基础**
  - [MDN Web Docs](https://developer.mozilla.org/zh-CN/) - 最权威的前端文档
  - [freeCodeCamp](https://www.freecodecamp.org/chinese/) - 免费交互式学习平台

- **Vue/React 框架**
  - [Vue.js 官方文档](https://cn.vuejs.org/) - 中文官方文档
  - [React 官方文档](https://react.dev/) - 官方教程

::github{repo="vuejs/awesome-vue"}

- **Node.js**
  - [Node.js 官方文档](https://nodejs.org/zh-cn/docs/) - 官方中文文档

::github{repo="goldbergyoni/nodebestpractices"}

#### 后端开发
- **Python 后端**
  - [FastAPI 官方文档](https://fastapi.tiangolo.com/zh/) - 现代高性能框架
  - [Django 官方教程](https://docs.djangoproject.com/zh-hans/) - 全栈框架

::github{repo="vinta/awesome-python"}

- **Java Spring**
  - [Spring 官方指南](https://spring.io/guides) - 官方学习路径

::github{repo="xkcoding/spring-boot-demo"}

- **Go Gin**
  - [Gin 官方文档](https://gin-gonic.com/zh-cn/docs/) - 轻量级Web框架

::github{repo="eddycjy/go-gin-example"}

- **数据库**
  - [MySQL 官方文档](https://dev.mysql.com/doc/) - 关系型数据库
  - [Redis 官方文档](https://redis.io/docs/) - 内存数据库

::github{repo="afatcoder/LeetcodeTop"}

### 服务器操作与运维

- **Docker**
  - [Docker 官方文档](https://docs.docker.com/) - 容器化技术

::github{repo="yeasy/docker_practice"}

- **Kubernetes**
  - [Kubernetes 官方文档](https://kubernetes.io/zh-cn/docs/) - 容器编排

::github{repo="guangzhengli/k8s-tutorials"}

- **NGINX**
  - [NGINX 官方文档](https://nginx.org/en/docs/) - Web服务器与反向代理

### 软件开发

- **桌面开发**
  - **QT (C++)**
    - [Qt 官方文档](https://doc.qt.io/) - 跨平台GUI框架

  - **Electron**
    - [Electron 官方文档](https://www.electronjs.org/zh/docs/latest/) - 使用Web技术构建桌面应用

### 通用能力

- **Git 版本控制**
  - [Pro Git](https://git-scm.com/book/zh/v2) - Git官方书籍中文版

::github{repo="geeeeeeeeek/git-recipes"}

- **命令行与SSH**
  - [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md) - 命令行艺术

### 计算机基础

- **算法与数据结构**
  - [LeetCode](https://leetcode.cn/) - 在线刷题平台

::github{repo="labuladong/fucking-algorithm"}

::github{repo="greyireland/algorithm-pattern"}

- **计算机网络**
  - 《计算机网络：自顶向下方法》- 经典教材

::github{repo="huangrt01/CS-Notes"}

## 总结
计算机技术是一个非常宽泛的领域，需要我们学的广，在某一领域深入研究学习。希望本篇文章可以帮助大家。